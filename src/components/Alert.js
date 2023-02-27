
// Adding + Auto Dismissing Alert Messages 
//| Complete React Course in Hindi #13
import React from 'react'

function Alert(props) {
    //success er S borohater hobe
    const capitalize = (word)=>{
        //javascript er vitor capitalize nai tai avabe
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    // props.alert tahole nicer gula dekhabe na false hole dekhabena jsx will be converted to javascript calls
    //`alert alert-${props.alert.type} alert-dismissible fade show ` ata hole green hoa jabe dark hole
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show `}role="alert">
        {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
        {/* akhane  oporer line kete props.alert*/}
        <strong> {capitalize(props.alert.type)}</strong>:{props.alert.msg}
        {/* erpor connect korar jonno app.js er vitor navbar er nice alert dibo */}
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
            {/* akhane alert props akare supply hobe  
        </button> */}
        {/* akhane cross button er poriborte 2 sec er por auto off hoa jabe tar jonno */}
        {/* tarjonno show allert e logic likhbo settime use */}
    </div>
  )
}

export default Alert