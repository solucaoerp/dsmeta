import NotificationButton from '../NotificationButton';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './styles.css';

import { useEffect, useState } from "react";
import axios from "axios";

import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365));
    const max = new Date();

    const [minDate, setMinDate] = useState(min);
    const [maxDate, setMaxDate] = useState(max);

    const [sales, setSales] = useState<Sale[]>([]);

    useEffect(() => {

        /* 
            console.log() - utilizado para fins de debug/testes
            console.log("TEST");
        */

        const dmin = minDate.toISOString().slice(0, 10);
        const dmax = maxDate.toISOString().slice(0, 10);
        //console.log(dmin);
        //console.log(dmax);

        axios.get(`${BASE_URL}/sales/list-by-date?minDate=${dmin}&maxDate=${dmax}`)
            .then(response => {
                //console.log(response.data) /* exibe no console do navegador, o retorno da requisição */
                setSales(response.data.content);
            });

    }, [minDate, maxDate]);

    return (
        <div className="dsmeta_card">

            <h2 className="dsmeta_sales_title">Vendas</h2>

            <div>
                <div className="dsmeta_form_control_container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta_form_control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta_form_control_container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta_form_control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta_sales_table">

                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {sales.map(sale => {
                            return (
                                <tr key={sale.id}>
                                    <td className="show992">{sale.id}</td>
                                    <td className="show576">{new Date(sale.date).toLocaleDateString()}</td>
                                    <td>{sale.sellerName}</td>
                                    <td className="show992">{sale.visited}</td>
                                    <td className="show992">{sale.deals}</td>
                                    <td>R$ {sale.amount.toFixed(2)}</td>
                                    <td>
                                        <div className="dsmeta_red_btn_container">
                                            <NotificationButton saleId={sale.id} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default SalesCard;