import Layout from "../src/components/Layout";
import IndexComponent from "../src/components/pages/Index";
export default function Home(props) {
  return (
    <Layout title="COVID-19 Analizer">
      <IndexComponent {...props} />
    </Layout>
  );
}
