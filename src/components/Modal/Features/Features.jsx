import { PiWind } from "react-icons/pi";
import { DetailsList } from "../../Card/Card.styled";
import {
    FeatureReviewsWrap,
    DetailsItemsWrap,
    VehicleDetailsWrap,
    VehicleDetailsList,
} from "./Features.styled";
import {AdultsIcon, TransmissionIcon, PetrolIcon, ToiletIcon, KitchenIcon, HobIcon, WaterIcon, GasIcon, BedIcon, MicrowaveIcon, ShowerIcon, FreezerIcon, TvIcon, RadioIcon, CdIcon, ConditionerIcon,     } from "../../Icons/AllIcons";

const returnDetails = (key, innerText, icon) => {
  return (
    key !== 0 && (
      <li>
        {icon}
        {`${innerText}${key > 1 ? "s" : ""}`}
      </li>
    )
  );
};

export const Features = ({
    card: {
        airConditioner,
        toilet,
        kitchen,
        microwave,
        shower,
        freezer,
        TV,
        hob,
        CD,
        beds,
        radio,
        gas,
        water,
        adults,
        transmission,
        engine,
        form,
        length,
        width,
        height,
        tank,
        consumption,
    },
}) => {
    return (
        <FeatureReviewsWrap>
            <DetailsItemsWrap>
                <DetailsList>
                    <li>
                        <AdultsIcon width={20} height={20} /> {`${adults} adults`}
                    </li>

                    <li className="capitalize">
                        <TransmissionIcon width={20} height={20} />
                        {transmission}
                    </li>

                    {returnDetails(
                        airConditioner,
                        "AC",
                        <PiWind
                            width={20}
                            height={20}
                            style={{ fill: "var(--main-text)" }}
                        />
                    )}

                    <li className="capitalize">
                        <PetrolIcon width={20} height={20} />
                        {engine}
                    </li>

                    {returnDetails(
                        kitchen,
                        "kitchen",
                        <KitchenIcon width={20} height={20}  />
                    )}

                    <li>
                        <BedIcon width={20} height={20} />
                        {`${beds} beds`}
                    </li>

                    <li>
                        <ConditionerIcon width={20} height={20}  />
                        {`${airConditioner} air conditioner`}
                    </li>

                    {returnDetails(CD, "CD", <CdIcon width={20} height={20} />)}
                    {returnDetails(
                        radio,
                        "Radio",
                        <RadioIcon width={20} height={20} />
                    )}
                    {returnDetails(TV, "TV", <TvIcon width={20} height={20} />)}
                    {returnDetails(
                        hob,
                        `${hob} hob`,
                        <HobIcon width={20} height={20}  />
                    )}
                    {returnDetails(
                        shower,
                        `${shower} shower`,
                        <ShowerIcon width={20} height={20}  />
                    )}
                    {returnDetails(
                        freezer,
                        `${freezer} freezer`,
                        <FreezerIcon width={20} height={20}  />
                    )}
                    {returnDetails(
                        toilet,
                        `${toilet} toilet`,
                        <ToiletIcon width={20} height={20} />
                    )}
                    {returnDetails(
                        microwave,
                        `${microwave} microwave`,
                        <MicrowaveIcon width={20} height={20} />
                    )}
                    {returnDetails(gas, gas, <GasIcon width={20} height={20}  />)}
                    {returnDetails(
                        water,
                        water,
                        <WaterIcon width={20} height={20} />
                    )}
                </DetailsList>
            </DetailsItemsWrap>

            <VehicleDetailsWrap>
                <h3>Vehicle details</h3>
                <hr />
                <VehicleDetailsList>
                    <li className="capitalize">
                        <p>Form</p>
                        <p>
                            {form === "alcove"
                                ? form
                                : `${form.slice(0, 5)} ${form.slice(5)}`}
                        </p>
                    </li>

                    <li>
                        <p>Length</p>
                        <p>{length}</p>
                    </li>

                    <li>
                        <p>Width</p>
                        <p>{width}</p>
                    </li>

                    <li>
                        <p>Height</p>
                        <p>{height}</p>
                    </li>

                    <li>
                        <p>Tank</p>
                        <p>{tank}</p>
                    </li>

                    <li>
                        <p>Consumption</p>
                        <p>{consumption}</p>
                    </li>
                </VehicleDetailsList>
            </VehicleDetailsWrap>
        </FeatureReviewsWrap>
    );
};