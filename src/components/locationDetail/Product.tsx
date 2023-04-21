import * as React from 'react'

const Product = (props:any) => {
  return (
    <>
    {props.c_product ?
        <div className="Products--ace container" data-ya-scope="Product">
        <ul className="Products-list Products-row Products-row--center grid grid-cols-3 gap-4">
        {props.c_product && props.c_product.map((item: any, i: Number) => {
                return (
                <>
                    <li className="Products-listItem">
                        <div className="Product Product--ace">
                            <div className="Product-row">
                                {item.image.url?
                                <div className="Product-imgWrapper">
                                    <img className="Product-img" alt="" src={item.image.url} />                                
                                </div>
                                :''
                                }
                                {item.title || item.description || item.button ?                                 
                                <div className="Product-info">
                                    {item.title?<h2 className="Product-title Product-eachChild">{item.title}</h2>:''}
                                    {item.description?<div className="Product-text Product-eachChild">{item.description}</div>:''}
                                    {item.button.link?
                                    <div className="Product-linkWrapper Product-eachChild">
                                        <a className="Product-link primary-cta my-2 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm" href={item.button.link} data-ya-track="link#" >{item.button.label.toUpperCase()}</a>
                                    </div>:''
                                    }                                    
                                </div>
                                :''
                                }
                            </div>
                        </div>
                    </li>
                </>
                )
            })
            }
        </ul>                            
    </div>:''}
    </>
  )
}

export default Product
