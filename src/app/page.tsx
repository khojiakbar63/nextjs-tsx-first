import React from "react";
import Image from 'next/image'
 

const page:React.FC = () => {
  return (
    <>
    <h1>Home</h1>
    <Image
      src="https://picsum.photos/id/195/300"
      alt="Picture of the author"
      width={700}
      height={300}
      quality={100}
      placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
    />
    </>
  );
};

export default page;
