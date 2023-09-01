import { FeaturedCollection } from "./featured-collection/Featured-Collection";
import { Hero } from "./hero/Hero";
import { MainSection } from "./main-section/Main-Section";
import { Layout } from "./shared/layout";

export const HomePage = () => {
    return(
        <>
        <Layout>
            <Hero />
            <MainSection />
            <FeaturedCollection />
        </Layout>
        </>
    )
}