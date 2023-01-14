import Head from "next/head";

const HeadComponent = ({ description, title }: HeadComponentProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default HeadComponent;

/* ---------------------------------- Props --------------------------------- */

interface HeadComponentProps {
  description: string;
  title: string;
}
