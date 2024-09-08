import { React, Component, useState, useEffect } from "react";

class PokemonCards extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isOpen: true,
            };
    }
    state = {  }
    render() { 
        const { isOpen } = this.state;
        if (!isOpen) return null; // Render nothing if the modal is not open
        return ( 
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
                <div className="bg-gray-900 text-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                    <h1 className="text-2xl font-bold mb-4 text-center">Pokemon Cards</h1>
                </div>
            </div>
         );
    }
}
 
export default PokemonCards;