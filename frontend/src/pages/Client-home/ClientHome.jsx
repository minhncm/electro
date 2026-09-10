import Container from "~/components/Container/Container";
import ClientHomeBanner from "./ClientHomeBanner";
import ClientHomeFeaturedCategories from "./ClientHomeFeaturedCategories";
import ClientHomeLatestProducts from "./ClientHomeLatestProducts";
import ClientHomeNewsletter from "./ClientHomeNewsletter";

function ClientHome() {
  return (
    <main>
      <Container>
        <div className="flex flex-col items-stretch gap-9 text-c-black">
          <ClientHomeBanner />
          <ClientHomeFeaturedCategories />
          <ClientHomeLatestProducts />
          <ClientHomeNewsletter />
        </div>
      </Container>
    </main>
  );
}

export default ClientHome;
