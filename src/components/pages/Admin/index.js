import React from 'react';
import {Body, ContentIndex, Header} from "./styles";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import GetAppIcon from '@material-ui/icons/GetApp';
import {Alert, AlertTitle} from '@material-ui/lab';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

export default () => {

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const ingresar = () => {

    }

    return (
        <ContentIndex>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <div className="container custom">
                    <Header>
                        <img src="/static/img/covid-logo.svg" className="logo animate__animated animate__bounce"/>
                        <h1 className="title">Admin</h1>
                    </Header>
                    <Body className="login">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Fecha:</label>
                                <div className="form-group row">
                                    <div className="col-6 col-md-6">
                                        <KeyboardDatePicker
                                            margin="normal"
                                            fullWidth={true}
                                            id="date-picker-dialog"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            value={selectedDate}
                                            fullWidth={true}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label>Vigencia:</label>
                                <div className="form-group row">
                                    <div className="col-6 col-md-6">
                                        <KeyboardDatePicker
                                            margin="normal"
                                            fullWidth={true}
                                            id="date-picker-dialog"
                                            format="MM/dd/yyyy"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <KeyboardTimePicker
                                            margin="normal"
                                            id="time-picker"
                                            value={selectedDate}
                                            fullWidth={true}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change time',
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 pt-3 text-right">
                                <Button variant="contained" size="large" color="primary" onClick={ingresar} className="mr-3">
                                    <SearchIcon/> Buscar
                                </Button>
                                <Button variant="contained" size="large" color="secondary" onClick={ingresar}>
                                    <GetAppIcon/> Descargar
                                </Button>
                            </div>
                        </div>
                    </Body>
                </div>
            </MuiPickersUtilsProvider>
        </ContentIndex>
    );
};
