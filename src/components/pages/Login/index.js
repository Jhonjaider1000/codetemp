import {Body, ContentIndex, Header, LeftPanel, RightPanel} from "./styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {Alert, AlertTitle} from '@material-ui/lab';

export default () => {
    const ingresar = () => {

    }

    return (
        <ContentIndex>
            <div className="container custom">
                <Header>
                    <img src="/static/img/covid-logo.svg" className="logo animate__animated animate__bounce"/>
                    <h1 className="title">Login | COVID-19 Analizer</h1>
                </Header>
                <Body className="login">
                    <div className="row">
                        <div className="col-12 pb-3">
                            <Alert severity="info">
                                <AlertTitle>Información</AlertTitle>
                                Ingrese el usuario y la clave de seguridad para ingresar al control de históricos.
                            </Alert>
                        </div>
                        <div className="col-12">
                            <TextField
                                label="Usuario"
                                id="usuario"
                                margin="normal"
                                fullWidth={true}
                                size="small"
                                required
                                variant="outlined"
                            />
                        </div>
                        <div className="col-12">
                            <TextField
                                type="password"
                                label="Clave"
                                id="clave"
                                margin="normal"
                                fullWidth={true}
                                size="small"
                                required
                                variant="outlined"
                            />
                        </div>
                        <div className="col-12 pt-3 text-right">
                            <Button variant="contained" size="large" color="primary" onClick={ingresar}>
                                Ingresar
                            </Button>
                        </div>
                    </div>
                </Body>
            </div>
        </ContentIndex>
    );
};
