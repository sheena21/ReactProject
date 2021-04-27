import React ,{ Component} from 'react';
import { Card , CardImg,CardText , CardBody ,CardTitle} from 'reactstrap';
class Dishdetail extends Component{

  renderSelectedDish(dish)
  {
    console.log("Rendered Selected Dish");
    if(dish!=null)
       return(
         <div className="row">
           <div className="col-12 col-md-5 m-1">
              <Card key={dish.id}>
                    <CardImg top src={dish.image} alt={dish.name} />
                   <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                 </CardBody>
             </Card>
        </div>
      </div>
    );
    else
      return(
        <div></div>
      );
   }
   renderComments(comments)
   {
      console.log("Rendered comments");
      if(comments==null){
          return (
            <div></div>
          );
     }
     const com=comments.map((comment) =>{
          return (
            <li key={comments.id}>
              <p>{comment.comment}</p>
              <p>--{comment.author},
              {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
              <p>---------------</p>
            </li>
          );
     });

     return(
       <div className="col-12 col-md-5 m-1">
         <h4> Comments</h4>
         <ul className='list-unstyled'>
            {com}
          </ul>

       </div>
        )
       }
       render()
       {
         const dish=this.props.selectedDish;
         if(dish==null){
            return(<div></div>);
          }

        else {
          return(
            <div className="container">
            <div className="row">
               {this.renderSelectedDish(dish)}
               {this.renderComments(dish.comments)}
            </div>
            </div>
          );
        }
       }

}
export default Dishdetail;
