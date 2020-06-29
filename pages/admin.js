import Layout from "../src/components/Layout";
import AdminComponent from "../src/components/pages/Admin";
export default function Login(props) {
    return (
        <Layout title="Admin - COVID-19 Analizer">
            <AdminComponent {...props} />
        </Layout>
    );
}
