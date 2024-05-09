import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Title({ page }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{page} - Binar Car Rental</title>
      </Helmet>
    </HelmetProvider>
  );
}
