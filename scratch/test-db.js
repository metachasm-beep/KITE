const { Client } = require('pg');

async function testConnection(url, name) {
    console.log(`Testing ${name}...`);
    const client = new Client({
        connectionString: url,
    });

    try {
        await client.connect();
        console.log(`✅ ${name} connected successfully!`);
        await client.end();
    } catch (err) {
        console.error(`❌ ${name} failed:`, err.message);
    }
}

const envLocalUrl = "postgresql://postgres.xhmgjzwuykrjsatrhosn:7i_%3FKsFg9F&Ny4W%40ap-northeast-1.pooler.supabase.com:6543/postgres";
const envUrl = "postgresql://postgres.xhmgjzwuykrjsatrhosn:Metalheaddean881%40aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true";

(async () => {
    await testConnection(envLocalUrl, ".env.local URL");
    await testConnection(envUrl, ".env URL");
})();
