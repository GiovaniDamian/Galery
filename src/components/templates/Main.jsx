import React, { Component } from 'react'
import { createClient } from 'pexels'
import $ from 'jquery'

const initialState = {
    name: '',
    list: []
}

export default class Main extends Component {

    state = {...initialState}

    updatePhotos() {
        $('div.photos').remove()        
        for(let i in this.state.list[0]) {
            const reference = this.state.list[0][i].src.original
            const img = $('<div>').addClass('col-12 col-md-6 col-lg-3 photos').html(`<img src= ${reference} class="img-fluid mb-4"> `)
            $('#images').append(img)
        }
    }

    updateField(event){
        const list = event.photos
        this.state.list.unshift(list)
        this.updatePhotos()     
    }

    renderSubmit(event) {
        event.preventDefault()
        this.renderform()
    }
    
    renderform() {
        const api_key = "563492ad6f91700001000001c022a36650a74a908d3197396fe8553b"
        const client = createClient(api_key);
            
        var query = this.state.name
        client.photos.search({ query, per_page: 30 }).then(photos => {
            this.updateField(photos)
        })
    }

    render() {
        return (
            <main className="content container-fluid main" >
                <div className="p-3 m-3">
                    <form id='form' className="form col-12 col-md-6 nobr" 
                    onSubmit={e => this.renderSubmit(e)}>
                        <div className="form-group"> 
                            <input type="text" className="form-control" id="search"  
                            placeholder='Procurar em Pexels.com' onChange={e => this.state.name = e.target.value}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary fa fa-search" ></button>
                        </div>
                    </form>  
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div id="images" class='row d-flex justify-content-center' >
                        </div>
                    </div>
                </div>
            </main>
        )
        
    }
}