import React , {PureComponent} from 'react';
import {SuggestReading,RelatedList} from '../style';
import {connect} from 'react-redux';
import axios from 'axios';
// import {actionCreator} from '../store';

class RelatedBook extends PureComponent{
  render(){
    const {list} = this.props;

    return(
      <SuggestReading>
            <h4>Related Books</h4>
            <RelatedList>
              <ul>
                {
                 list.map((item,index) => (
                  <li key = {index}>{item.get('title')}<span>By: {item.get('author')}</span>
                    </li>
                  ))
                }
              </ul>
            </RelatedList>
      </SuggestReading>
    )
  }

  
}

const mapStateProps = (state) => ({
  list: state.getIn(['detail','relatedList'])
})



export default connect(mapStateProps,null)(RelatedBook);
    