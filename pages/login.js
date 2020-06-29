import Layout from "../src/components/Layout";
import LoginComponent from "../src/components/pages/Login";
export default function Login(props) {
    return (
        <Layout title="Login - COVID-19 Analizer">
            <LoginComponent {...props} />
        </Layout>
    );
}
