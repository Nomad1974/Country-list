import { useNavigate } from "react-router-dom";

import { Card } from "../../components/Card";
import { List } from "../../components/List";
import useCountryList from "./useCountryList";
import { Preloader } from "../preloaders/Preloader";
import { Error } from "../../pages/Error";
import { SearchError } from "../../pages/SearchError";


export const CountryList = () => {
    const navigate = useNavigate();
    const [countries, {status, error}] = useCountryList();

    return ( 
        <>
            {error && <Error />}
            {status === 'loading' && <Preloader />}
            {status === 'received' && countries.length === 0 ? <SearchError /> : (
                    <List>
                        {countries.map((c) => {
                            const countryInfo = {
                                img: c.flags.png,
                                name: c.name,
                                info: [
                                    {
                                        title: 'Population',
                                        description: c.population.toLocaleString(),
                                    },
                                    {
                                        title: 'Region',
                                        description: c.region,
                                    },
                                    {
                                        title: 'Capital',
                                        description: c.capital,
                                    },
                                    {
                                        title: 'Area',
                                        description: c.area,
                                    },
                                ],
                            };

                        return (
                            <Card
                                key={c.name}
                                onClick={() => navigate(`/country/${c.name}`)}
                                {...countryInfo}
                            />
                        );
                    })}
                </List>
            )}
        </>
    );
}
