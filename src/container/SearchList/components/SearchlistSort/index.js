import React,{Component} from 'react'
import './index.less'
import LazyLoad from 'react-lazyload'
import Loading from '../../../Home/Loading'
import {createHashHistory} from 'history'
import Dialog from '../../../../components/Dialog'
let history = createHashHistory();
export default class SearchlistSort extends Component{
    addToCart=(good,session)=>{
        console.log(session)
        if(session.code==0){
            this.props.goodAdd(good,session.user.usertel)
        }else{
            alert('用户没有登录，不能添加商品');
            history.push('/login/account');
        }

    };
    render(){
        console.log(this.props.message);
        return(
            <div>
                <ul className='sort-con'>
                    {
                        this.props.dataList.map((item,index)=>(
                            <li key={index} className={index%2==0?'border-right':''}>
                                <div className='img-wrapper'>
                                    <img src={item.img} alt=""/>
                                </div>
                                <p className='sort-intro'>{item.name}</p>
                                <p className='sort-price'>
                                    <span className='L'>￥{item.totalPrice}</span>
                                    <span className='R sord-add' onClick={()=>this.addToCart(item,this.props.session)}>+</span>
                                </p>
                            </li>
                            )
                        )
                    }
                </ul>
                <Dialog/>
                <div>
                    <span className='cart'><i className='iconfont icon-gouwuche'></i></span>
                </div>
            </div>
        )
    }
}
