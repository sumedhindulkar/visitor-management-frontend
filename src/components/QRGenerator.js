import React, { useState } from "react";
import QRCode from "qrcode";
import Card from "@material-tailwind/react/Card";
import CardRow from "@material-tailwind/react/CardRow";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardStatus from "@material-tailwind/react/CardStatus";
import CardStatusFooter from "@material-tailwind/react/CardStatusFooter";
import Icon from "@material-tailwind/react/Icon";
import H2 from "@material-tailwind/react/Heading5";
import Button from "@material-tailwind/react/Button";
export default function QRGenerator({
  color,
  icon,
  title,
  amount,
  percentage,
  percentageColor,
  percentageIcon,
  date,
}) {
  // const [link, setLink] = useState();
  const link = "https://github.com/sumedhindulkar";
  const [image, setImage] = useState(null);
  const generateQR = async () => {
    try {
      console.log(link);
      const generatedCode = await QRCode.toDataURL(link);
      setImage(generatedCode);
      console.log(image);
    } catch (err) {
      console.log("Error: " + err);
    }
  };
  return (
    <div className="px-4 mb-10">
      <Card>
        <CardRow>
          <CardHeader color={color} iconOnly className="mb-0">
            <Icon name={icon} size="3xl" color="white" />
          </CardHeader>

          <CardStatus title={title} amount={amount} />
        </CardRow>

        <CardStatusFooter>
          <div className="w-full flex justify-center py-4 lg:pt-4 pt-8">
            <H2>Generate your unique QR code</H2>
            <Button onClick={() => generateQR()} className="ml-4" color="red">
              Generate
            </Button>
          </div>
        </CardStatusFooter>
        {image && (
          <div className="w-full flex justify-center items-center   flex-col py-4 lg:pt-4 pt-8">
            <a download href={image}>
              <img src={image} alt="img" />
            </a>
            <a download href={image}>
              Click to download
            </a>
          </div>
        )}
      </Card>
    </div>
  );
}
