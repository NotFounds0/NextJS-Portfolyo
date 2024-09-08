import Accounts from "@/components/Accounts";
import Footer from "@/components/Footer";
import GitRepo from "@/components/GitRepo";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Skills from "@/components/Skills";
import axios from "axios";
import Head from "next/head";

export default function Home({ data, gitData }) {
  return (
    <>
      <Head>
        <title>Home | NotFounds</title>
        <meta name="description" content="NotFounds" />
        <link rel="icon" href="/img/logo.webp" />
      </Head>
      <Header />
      <main className="container mx-auto mt-52">
        <Main data={data} />
        <GitRepo gitData={gitData} />
        <Skills />
        <Accounts />
      </main>
      <Footer />
    </>
  );
}
export const getServerSideProps = async () => {
  try {
    const gitUsername = "NotFounds0"; // github kullanıcı adınız
    const res = await axios.get(`${process.env.LANYARD}`);
    const gitApi = await axios.get(
      `https://api.github.com/users/${gitUsername}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_TOKEN}`,
        },
      }
    );
    return {
      props: {
        data: res.data,
        gitData: gitApi.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      error: "Veri getirilemedi",
      gitData: [],
    },
  };
};
