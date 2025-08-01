
// Define the type for our props
interface MessageProps {
  name: string;
}

// Use the defined interface for the component's props
function Message({ name }: MessageProps) {
  return (
    <div className="message-box">
      <h2>Dear Binibining {name},</h2>
      <p>
        Hi Glai Alam kong unoffical pa pero heto to make you feel special
        ive decided to code this website hoping that one day maging real
        girlfriend na kita, thank you kasi lagi mo akong iniintindi at 
        pinapadama na di ako nag iisa, salamat at dumating ka sa buhay ko
      </p>
      <br></br>
      <p>
        Di mo alam kung gaano ako kasaya tuwing kasama kita yung simpleng tawanan, kulitan, at mga usapan natin, 
        lahat ‘yon sobrang mahalaga sa akin. Ikaw yung dahilan kung bakit mas gusto kong maging mabuting tao. 
        Binigyan mo ako ng inspirasyon, ng lakas ng loob, at ng rason para magsikap at mangarap.
      </p>
    </div>
  );
}

export default Message;