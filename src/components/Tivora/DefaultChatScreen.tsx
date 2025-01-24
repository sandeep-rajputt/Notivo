import TivoraMessage from "@components/Tivora/TivoraMessage";

const DefaultChatScreen = () => {
  return (
    <div className="flex flex-col gap-3 overflow-y-scroll h-full notivo-scrollbar pr-1 py-2 ">
      <TivoraMessage message="Hi! I’m Tivora 🤖, your Notivo assistant. How can I help you?" />
      <div className="text-primary-word px-5 pt-6">
        <p className="text-sm">Common questions are:</p>
        <div className="mt-3 flex flex-col gap-2">
          <button className="border border-primary-word px-4 py-2 rounded-md text-xs text-start leading-5 tracking-wide hover:bg-primary-background/50">
            How do I set up a reminder on Notivo?
          </button>
          <button className="border border-primary-word px-4 py-2 rounded-md text-xs text-start leading-5 tracking-wide hover:bg-primary-background/50">
            Can I receive notifications on multiple platforms with Notivo?
          </button>
          <button className="border border-primary-word px-4 py-2 rounded-md text-xs text-start leading-5 tracking-wide hover:bg-primary-background/50">
            How do I set up a reminder on Notivo?
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultChatScreen;
