import features from "../../utils/data/features";
const Benefits = () => {
  return (
    <main
      id="benefits"
      className="w-full px-14 h-auto mb-40 p-4 flex flex-col justify-start gap-20 items-center"
    >
      <h1 className="underline font-semibold text-xl">Benefits</h1>
      <ul className="grid grid-cols-3 gap-6 w-full">
        {features.map((feature, index) => (
          <li
            key={index}
            className="w-full aspect-video p-5 flex gap-3 items-start rounded-xl bg-[#737cde3f]"
          >
            {feature.icon}
            <div className="flex-1 space-y-4">
              <h1 className="font-semibold text-lg text-white">
                {feature.title}
              </h1>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Benefits;
