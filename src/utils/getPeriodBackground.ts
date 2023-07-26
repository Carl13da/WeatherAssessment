import { Period } from "../types/Period";

export const getWeatherBackground = (period: Period) => {
  if (period.temperature > 80) {
    return "https://imengine.public.prod.cmg.infomaker.io/?uuid=c1d3deeb-6e98-5e7e-a0c2-a3d30517b8e7&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.99999&width=1200&height=675&x=1.0E-5&y=1.0E-5";
  } else if (
    period.probabilityOfPrecipitation.value &&
    period.probabilityOfPrecipitation.value > 30
  ) {
    return "https://centralca.cdn-anvilcms.net/media/images/2019/01/02/images/Rainy_Weather_pix.max-1200x675.jpg";
  } else {
    return "https://imengine.public.prod.cmg.infomaker.io/?uuid=c1d3deeb-6e98-5e7e-a0c2-a3d30517b8e7&function=cropresize&type=preview&source=false&q=75&crop_w=0.99999&crop_h=0.99999&width=1200&height=675&x=1.0E-5&y=1.0E-5";
  }
};
