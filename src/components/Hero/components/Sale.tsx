import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

function Sale() {
  return (
    <div className="flex items-center justify-center h-full">
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow
          baseVelocity={2}
          direction={1}
          className="flex items-center justify-center"
        >
          <span className="text-lg sm:text-2xl font-bold mx-8 text-white whitespace-nowrap">
            SALE 35% until the end of the month
          </span>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
    </div>
  );
}

export default Sale;