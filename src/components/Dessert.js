import React, { Component } from 'react';


class Dessert extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        this.fetchDesserts();
    }

    fetchDesserts() {
        fetch(`http://localhost:8081/desserts`)
            .then(res => res.json())
            .then(result => this.setState({
                desserts: result.desserts,
                isLoading: false
            }));
    }

    render() {
        const { isLoading, desserts } = this.state;
        return (
            <div className="desserts">
                <h1>Desserts</h1>
                <hr />
                <ul>
                    {!isLoading ? (
                        desserts.map(item => {
                            const { dessertId, dessert, description } = item;
                            return (
                                <div key={dessertId}>
                                    <h3>{dessert}</h3>
                                    <p>{description}</p>
                                </div>
                            );
                        })
                    ) : (
                            <p>Loading...</p>
                        )}
                </ul>
            </div>
        )
    }
}

export default Dessert;