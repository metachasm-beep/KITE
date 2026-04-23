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

const envUrl = "postgresql://postgres.xhmgjzwuykrjsatrhosn:Metalheaddean881@aws-1-ap-northeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true";

(async () => {
    await testConnection(envUrl, "Updated URL");
})();
