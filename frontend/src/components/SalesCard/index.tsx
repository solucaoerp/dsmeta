import NotificationButton from '../NotificationButton';

import './styles.css';

function SalesCard() {
    return (
        <>
            <div className="dsmeta_card">

                <h2 className="dsmeta_sales_title">Vendas</h2>

                <div>
                    <div className="dsmeta_form_control_container">
                        <input className="dsmeta_form_control" type="text" />
                    </div>
                    <div className="dsmeta_form_control_container">
                        <input className="dsmeta_form_control" type="text" />
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
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta_red_btn_container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta_red_btn_container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show992">#341</td>
                                <td className="show576">08/07/2022</td>
                                <td>Anakin</td>
                                <td className="show992">15</td>
                                <td className="show992">11</td>
                                <td>R$ 55300.00</td>
                                <td>
                                    <div className="dsmeta_red_btn_container">
                                        <NotificationButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>
        </>
    )
}

export default SalesCard