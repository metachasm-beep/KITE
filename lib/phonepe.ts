import { 
  StandardCheckoutClient, 
  Env, 
  StandardCheckoutPayRequest 
} from "@phonepe-pg/pg-sdk-node";

const clientId = process.env.PHONEPE_CLIENT_ID;
const clientSecret = process.env.PHONEPE_CLIENT_SECRET;
const environment = process.env.PHONEPE_ENV === "PRODUCTION" ? Env.PRODUCTION : Env.SANDBOX;

if (!clientId || !clientSecret) {
  console.warn("SETTLEMENT_PROTOCOL_WARNING: PhonePe credentials missing. Secure transactions disabled.");
}

export const phonePeClient = (clientId && clientSecret) 
  ? StandardCheckoutClient.getInstance(clientId, clientSecret, 1, environment)
  : null;

/**
 * Initiates a secure settlement protocol via PhonePe Standard Checkout.
 */
export async function initiatePhonePePayment({
  amount,
  transactionId,
  merchantOrderId,
  callbackUrl,
}: {
  amount: number;
  transactionId: string;
  merchantOrderId: string;
  callbackUrl: string;
}) {
  if (!phonePeClient) {
    throw new Error("ACQUISITION_PROTOCOL_FAILURE: Settlement client not initialized.");
  }

  try {
    const response = await phonePeClient.pay(
      StandardCheckoutPayRequest.builder()
        .merchantTransactionId(transactionId)
        .merchantOrderId(merchantOrderId)
        .amount(amount * 100) // Paise
        .redirectUrl(callbackUrl)
        .redirectMode("POST")
        .callbackUrl(callbackUrl)
        .paymentInstrument({ type: "PAY_PAGE" })
        .build()
    );

    if (response) {
      return {
        success: true,
        redirectUrl: (response as any).data?.instrumentResponse?.redirectInfo?.url,
      };
    }

    return {
      success: false,
      error: "SETTLEMENT_HANDSHAKE_FAILURE: Null response from gateway",
    };
  } catch (error: any) {
    console.error("PHONEPE_INIT_ERROR:", error);
    return {
      success: false,
      error: error.message || "INTERNAL_CRYPTO_ERROR",
    };
  }
}
