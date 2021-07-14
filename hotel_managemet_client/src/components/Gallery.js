import React,{Component} from "react";
class Gallery extends Component{
    constructor(props) {
        super(props);
        this.state={
            imageUrl:"",
            imageUrlArray:[



            ],
            showModal:false,
        }
    }
    render() {
        return(
            <div className="images">
               <h3>
                   yellow
               </h3>

            </div>

    )
    }

}
export default Gallery;