import * as React from "react";
import Link from "../commons/Link";
function Menu(props: any) {
  return (
    <>
      <ul className="primary-nav">
        {props.c_menu && props.c_menu.map((item: any, i: Number) => {
          return (
            <>
              <li>
              <Link props={item} />
              </li>
            </>
          )
        })}

      </ul>
    </>
  )
}

export default Menu