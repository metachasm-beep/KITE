import { PhonePePaymentClient, Env } from "@phonepe-pg/pg-sdk-node";

const clientId = process.env.PHONEPE_CLIENT_ID;
const clientSecret = process.env.PHONEPE_CLIENT_SECRET;
const environment = process.env.PHONEPE_ENV === "PRODUCTION" ? Env.PRODUCTION : Env.SANDBOX;

if (!clientId || !clientSecret) {
  console.warn("SETTLEMENT_PROTOCOL_WARNING: PhonePe credentials missing. Secure transactions disabled.");
}

export const phonePeClient = (clientId && clientSecret) 
  ? new PhonePePaymentClient(clientId, clientSecret, 1, environment)
  : null;

/**
 * Initiates a secure settlement protocol via PhonePe.
 * @param amount - The total yield to be settled (in INR).
 * @param transactionId - Unique identification for this acquisition.
 * @param merchantOrderId - Reference matching the internal order ID.
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
    const response = await phonePeClient.standardCheckout().initiate({
      merchantTransactionId: transactionId,
      merchantOrderId: merchantOrderId,
      amount: amount * 100, // PhonePe expects amount in paise (Rupee * 100)
      redirectUrl: callbackUrl,
      redirectMode: "POST",
      callbackUrl: callbackUrl,
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    });

    if (response.status === 200 && response.data?.instrumentResponse?.redirectInfo?.url) {
      return {
        success: true,
        redirectUrl: response.data.instrumentResponse.redirectInfo.url,
      };
    }

    return {
      success: false,
      error: "SETTLEMENT_HANDSHAKE_FAILURE: " + (response.message || "Unknown error"),
    };
  } catch (error: any) {
    console.error("PHONEPE_INIT_ERROR:", error);
    return {
      success: false,
      error: error.message || "INTERNAL_CRYPTO_ERROR",
    };
  }
}
