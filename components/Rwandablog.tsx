// ...unchanged imports
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const BuyCrypto = () => {
  return (
    <>
      <Head>
        <title>Buy Crypto with MTN Mobile Money Rwanda on Numerobook</title>
        <meta
          name="description"
          content="Learn how to buy cryptocurrency on Numerobook using MTN Mobile Money Rwanda."
        />
      </Head>

      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {/* Hero Section */}
        <section style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '2.5em', fontWeight: 'bold', marginBottom: '20px' }}>
            Buy Crypto with MTN Mobile Money Rwanda on Numerobook
          </h1>
          <div
  style={{
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
  }}
>
  <Image src="/images/happy.jpg" alt="Happy" width={500} height={300} />
</div>

          <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1em' }}>
            Cryptocurrency adoption in Africa is rising rapidly...
          </p>
        </section>

        {/* Numerobook Overview */}
        <section style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '15px' }}>
            What Is Numerobook?
          </h2>
          <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1em' }}>
            Numerobook is a peer-to-peer (P2P) crypto marketplace...
          </p>
        </section>

        {/* MTN Mobile Money */}
        <section style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '15px' }}>
            Why MTN Mobile Money Rwanda?
          </h2>
          <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1em' }}>
            MTN Mobile Money Rwanda is Rwanda’s leading mobile wallet...
          </p>
          <ul style={{ maxWidth: '800px', margin: '20px auto', textAlign: 'left', fontSize: '1.1em' }}>
            <li><strong>Accessibility:</strong> Anyone with a <Link href="https://www.mtn.com/">mobile phone</Link>. and a valid ID can open a mobile money account.</li>
            <li><strong>Speed:</strong> Transactions on Numerobook using mobile money are completed in minutes.</li>
            <li><strong>No Bank Required:</strong> Perfect for unbanked and underbanked users.</li>
          </ul>
        </section>

        {/* How to Buy Crypto */}
        <section style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '15px' }}>
            How to Buy Crypto on Numerobook with MTN Mobile Money Rwanda
          </h2>
          <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1em' }}>
            Buying Bitcoin, USDT, or other digital assets on Numerobook...
          </p>
          <ol style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', fontSize: '1.1em' }}>
            <li><strong>Create a Numerobook Account:</strong> Visit <Link href="https://numerobook.com">numerobook.com</Link>...</li>
            <li><strong>Browse Available Crypto Offers:</strong> On the home screen, select “Buy Crypto.”...</li>
            <li><strong>Select a Seller and Initiate Trade:</strong> Choose a seller with a good rating...</li>
            <li><strong>Send Payment via MTN Mobile Money Rwanda:</strong> Use your phone to dial *182#...</li>
            <li><strong>Receive Crypto in Your Wallet:</strong> Once the seller confirms receipt...</li>
          </ol>
        </section>

        {/* Security */}
        <section style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '15px' }}>
            Security and Escrow Protection
          </h2>
          <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1em' }}>
            Numerobook uses a smart escrow system...
          </p>
          <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1em' }}>
            If there’s ever a dispute, Numerobook's support team...
          </p>
        </section>

        {/* Supported Crypto */}
        <section style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '15px' }}>
            Supported Cryptocurrencies on Numerobook
          </h2>
          <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1em' }}>
            Currently, you can use MTN Mobile Money Rwanda to buy the following...
          </p>
          <ul style={{ maxWidth: '800px', margin: '20px auto', textAlign: 'left', fontSize: '1.1em' }}>
            <li>Bitcoin (BTC)</li>
            <li>Tether (USDT)</li>
            <li>And more coming soon</li>
          </ul>
        </section>

        {/* Why Choose */}
        <section style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '15px' }}>
            Why Choose Numerobook for Crypto in Rwanda?
          </h2>
          <ul style={{ maxWidth: '800px', margin: '20px auto', textAlign: 'left', fontSize: '1.1em' }}>
            <li><strong>Localized for Rwandan Users:</strong> Fully optimized for Rwanda...</li>
            <li><strong>Low Minimum Trade Size:</strong> Start with as little as 5,000 RWF...</li>
            <li><strong>24/7 Support:</strong> Get help anytime via live chat or email.</li>
            <li><strong>Educational Content:</strong> Numerobook offers free tutorials and articles...</li>
          </ul>
        </section>

        {/* Future */}
        <section style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h2 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '15px' }}>
            The Future of Crypto in Rwanda
          </h2>
          <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1em' }}>
            While crypto remains unregulated in Rwanda, it is not illegal...
          </p>
          <p style={{ maxWidth: '800px', margin: '20px auto', fontSize: '1.1em' }}>
            As the government begins to engage with blockchain tech...
          </p>
        </section>
      </main>
    </>
  );
};

export default BuyCrypto;
