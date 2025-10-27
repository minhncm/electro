import { Carousel } from "react-responsive-carousel";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ClientCarousel({ children }) {
  return (
    <Carousel
      className="rounded-lg overflow-hidden flex"
      infiniteLoop
      autoPlay
      emulateTouch
      interval={5000}
      showStatus={false}
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <div
            className="absolute top-[calc(50%-15px)] left-[15px] bg-surface rounded-lg opacity-75 z-[2]
                    text-[#adb5bd] w-[40px] h-[40px] flex items-center justify-center hover:opacity-100"
            onClick={onClickHandler}
            title={label}
          >
            <ChevronLeft size={30} strokeWidth={1.5} />
          </div>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <div
            className="absolute top-[calc(50%-15px)] right-[15px] bg-surface rounded-lg opacity-75 z-[2]
                    text-[#adb5bd] w-[40px] h-[40px] flex items-center justify-center hover:opacity-100"
            onClick={onClickHandler}
            title={label}
          >
            <ChevronRight size={30} strokeWidth={1.5} />
          </div>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected)
          return (
            <li
              className="rounded-[5px] bg-alt-hover opacity-50 w-[30px] h-[5px] 
                        inline-block mx-[5px] cursor-pointer hover:opacity-100"
              style={{ opacity: 1 }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );

        return (
          <li
            className="rounded-[5px] bg-alt-hover opacity-50 w-[30px] h-[5px] 
                        inline-block mx-[5px] cursor-pointer hover:opacity-100"
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {children}
    </Carousel>
  );
}

export default ClientCarousel;
