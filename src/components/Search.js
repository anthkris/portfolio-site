import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import SearchResultsPage from '../pages/Results.js';
import '../styles/search.scss';
 
// Search component
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ``,
            results: [],
            redirect: false,
        }
    }

    componentDidUpdate(prevProps, prevState) {
         if (this.state.redirect !== false ) {
            this.setState(s => {
                return {
                    redirect: false
                }
            })
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const query = this.state.query;
        const results = this.getSearchResults(query);
        this.setState(s => {
            return {
                results,
                query: ``,
                redirect: true
            }
        })
        event.currentTarget.reset();
    }
 
    render() {
        const redirect = this.state.redirect; 
        if( redirect ) {
            return <Redirect to={{
                            pathname: '/results',
                            state: { results: this.state.results }
                        }} />; 
        }   
        return (
            <div className="pt2 flex justify-end-l justify-center search pa3 border-box">
                <form onSubmit={this.onSubmitHandler}>
                    <label>
                        Search 
                        <input type="text" value={this.state.query} onChange={this.search} placeholder="find posts"/>
                    </label>
                </form>
            </div>
        )
    }
 
    getSearchResults(query) {
        if (!query || !window.__LUNR__) return []
        const results = window.__LUNR__.index.search(query)
        return results.map(({ ref }) => window.__LUNR__.store[ref])
    }
 
    search = event => {
        const query = event.target.value;
        this.setState(s => {
            return {
                query
            }
        })
    }
}