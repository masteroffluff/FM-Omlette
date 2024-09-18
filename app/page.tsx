import Image from "next/image";

export default function Home() {
  return (
    <div className="grid xl:grid-cols-[2fr_5fr_2fr] items-center justify-items-center min-h-screen p-0 sm:p-20 text-body-text">
      <main className="flex flex-col xl:col-start-2 items-center sm:items-start bg-white sm:rounded-2xl p-10">
        <Image
          src="/images/image-omelette.jpeg"
          alt="Omelette"
          className="w-full sm:rounded-2xl mb-5"
          width={500}
          height={500}
          priority
        />
        <h1 className="mb-2">Simple Omelette Recipe</h1>

        <p className="mb-2">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
          to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>


        <div className="bg-precard-background p-5 rounded-20 rounded-2xl w-full my-5">
          <h4 className="text-prepcard-title pb-2">Preparation time</h4>
          <ul className="list-disc list-inside marker:text-prepcard-title marker:font-thin">
            <li className="pb-1"><strong>Total:</strong> Approximately 10 minutes</li>
            <li className="pb-1"><strong>Preparation:</strong> 5 minutes</li>
            <li className="pb-1"><strong>Cooking:</strong> 5 minutes</li>
          </ul>
        </div>

        <div className="border-solid border-b border-slate-200 pb-5 mb-5 w-full">
          <h2>Ingredients</h2>
          <ul className="list-disc pl-5 marker:text-heading-text">
            <li className="pb-1">2-3 large eggs</li>
            <li className="pb-1">Salt, to taste</li>
            <li className="pb-1">Pepper, to taste</li>
            <li className="pb-1">1 tablespoon of butter or oil</li>
            <li className="pb-1">Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>

        <div className="border-solid border-b border-slate-200 pb-5 mb-5 w-full">
          <h2>Instructions</h2>
          <ol className="list-decimal pl-5 marker:text-heading-text">
            <li>
              <strong>Beat the eggs:</strong> In a bowl, beat the eggs with a pinch of salt and pepper until they are well
              mixed.
              You can add a tablespoon of water or milk for a fluffier texture.
            </li>
            <li><strong>Heat the pan:</strong> Place a non-stick frying pan over medium heat and add butter or oil.</li>
            <li>
              <strong>Cook the omelette:</strong> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to
              ensure
              the eggs evenly coat the surface.
            </li>
            <li>
              <strong>Add fillings (optional):</strong> When the eggs begin to set at the edges but are still slightly runny in
              the
              middle, sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
              <strong>Fold and serve:</strong> As the omelette continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a plate.
            </li>
            <li><strong>Enjoy:</strong> Serve hot, with additional salt and pepper if needed.</li>
          </ol>
        </div>

        <div className="w-full">
          <h2>Nutrition</h2>
          <p>The table below shows nudivitional values per serving without the additional fillings.</p>

          <div className="w-full grid grid-rows-4">
            <div className="grid grid-cols-2 py-2 border-solid border-b border-slate-200">
              <div className="">Calories</div>
              <div className="text-heading-text font-bold">277kcal</div>
            </div>
            <div className="grid grid-cols-2 py-2 border-solid border-b border-slate-200">
              <div className="">Carbs</div>
              <div className="text-heading-text font-bold">0g</div>
            </div>
            <div className="grid grid-cols-2 py-2 border-solid border-b border-slate-200">
              <div className="">Protein</div>
              <div className="text-heading-text font-bold">20g</div>
            </div>
            <div className="grid grid-cols-2 py-2">
              <div className="col-start-1">Fat</div>
              <div className="text-heading-text font-bold">22g</div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
