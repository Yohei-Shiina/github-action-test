import { NextPage } from "next";
import { ChatDisplay } from "~/components/ChatDisplay";
import { Message } from "~/interfaces/Message";

interface Props {
  messages: Message[];
}

const Chat: NextPage<Props> = ({ messages }) => {
  return (
    <div>
      <ChatDisplay messages={messages} />
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const messages = [
    {
      sender: "Stranger",
      message: "Hello World",
      timestamp: new Date().toString(),
    },
    {
      sender: "Stranger",
      message: "This chat is awesome!",
      timestamp: new Date().toString(),
    },
    {
      sender: "Founder",
      message: "This is the future",
      timestamp: new Date().toString(),
    },
  ];

  return {
    props: {
      messages,
    },
  };
}

export default Chat;
