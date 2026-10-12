

export default function Button( {text, bgColor, textColor ,hoverColor ,padding,rounded , margin}) {
  return (
    <div>
      <button className={`
        ${bgColor}
        ${textColor} 
        ${hoverColor}
        ${padding}  
        ${rounded}
        ${margin}
        font-semibold  shadow-md transition duration-300 hover:scale-105`} >
        {text}
      </button>
    </div>
  )
}
