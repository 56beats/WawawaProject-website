import { NextPage } from "next";
import Layout from "@/components/Layout";
import MainHeader from "@/components/presentational/MainHeader";
import CategorySection from "@/components/presentational/CategorySection";
import MemberSection from "@/components/presentational/MemberSection";

const Page: NextPage = () => {
  return (
    <Layout>
      <MainHeader />
      <CategorySection />
      <MemberSection />
    </Layout>
  );
};

export default Page;
