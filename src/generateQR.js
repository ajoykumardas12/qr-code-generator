import QRCode from "qrcode";
let qr="";

const generateQR = async text => {
    try {
      await QRCode.toDataURL(text);
    } catch (err) {
      console.error(err);
    }finally{
        return qr;
    }
}

export default generateQR;