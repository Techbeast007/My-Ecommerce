import Image from "next/image";
import logos from '../../../public/images/logo2.png'

const Logo = () => {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg" width="45.77" height="35.001" viewBox="0 0 45.77 35.001">
    //   <path id="noun_cloth_2129414" d="M437.579,459a1.344,1.344,0,0,1-1.3-.867l-3.26-8.556H418.69a2.69,2.69,0,0,1-2.69-2.692V426.692A2.691,2.691,0,0,1,418.7,424h18.843a1.346,1.346,0,0,1,1.218.773l4.07,8.65h16.252a2.69,2.69,0,0,1,2.69,2.692v20.192a2.691,2.691,0,0,1-2.7,2.692Zm-.895-32.308H418.7s0,6.731,0,20.192h27.494Zm7.41,9.423,5.432,11.542a1.346,1.346,0,0,1-.332,1.586l-8.073,7.064h17.952s0-6.731,0-20.192Zm-5.986,19.251,6.617-5.79H435.9Z" transform="translate(-416 -424)"/>
    // </svg>
    <>
      <Image src={logos} width={'100px'} height={'80px'} /></>

  )
};


export default Logo