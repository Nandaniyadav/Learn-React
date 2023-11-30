import React from "react";
const SlotGame = (props) => {
    let a = '😁';
    let b = '😁';
    let c = '😂';
    if ((props.a === props.b) && (props.b === props.c)) {
      return (
        <>
        <div>
          <h1>{a}{b}{c}
          </h1>
          <h3>This is Maching</h3>
          </div>
        </>
      );
    } else {
        return (
            <><div>
              <h1>{a}{b}{c}
              </h1>
              <h3>This is not  Maching</h3>
              </div>
            </>
          );
    }
  };
  export default SlotGame;