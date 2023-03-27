import React, { Fragment } from "react";
import "./Ticket.css";

export default class Ticket extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            countriesData: {
                Iran: ["تبریز", "تهران", "شیراز", "اصفهان", "مشهد"],
                Turkey: ["استانبول", "ازمیر", "انکارا", "انتالیا"],
                US: ["لس انجلس", "سن دیه گو", "شیکاگو"],
            },

            mainCountryCities: []
        }

        this.selectHandler = this.selectHandler.bind(this)
        this.chooseDataCity = this.chooseDataCity.bind(this)
    }

    //selest country
    selectHandler(event) {
        let city = event.target.value
        if (city) {
            this.chooseDataCity(city)
        } else {
            this.setState({
                mainCountryCities: []
            })
            alert('لطفا یک شهر رو انتخاب کنید')
        }
    }

    //choose data of country
    chooseDataCity(city) {
        let mainCountries = this.state.countriesData[city]
        this.setState({
            mainCountryCities: mainCountries
        })
    }


    render() {
        return (
            <>
                <div className="container">
                    <div>
                        <div className="box">
                            <input className="fnameInput" placeholder="نام" />
                        </div>
                        <div className="box">
                            <input className="lnameInput" placeholder="نام خانوادگی" />
                        </div>
                        <div className="box">
                            <select onChange={this.selectHandler} className="countrySelect">
                                <option value="">انتخاب کشور</option>
                                <option className="option" value="Iran">ایران</option>
                                <option className="option" value="Turkey">ترکیه</option>
                                <option className="option" value="US">امریکا</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <div className="box">
                            <input className="emailInput" placeholder="ایمیل" />
                        </div>
                        <div className="box">
                            <input className="phoneInput" placeholder="شماره تلفن" />
                        </div>
                        <div className="box">
                            <select className="citySelect">
                                {this.state.mainCountryCities.length ? this.state.mainCountryCities.map(city => (<option key={city} value={city}>{city}</option>)) :
                                    (<option key="-1" value="-1">انتخاب شهر</option>)}
                            </select>
                        </div>
                    </div>

                </div>
                <div className="box">
                    <button className="btn">Book a ticket</button>
                </div>
            </>
        )
    }
}
