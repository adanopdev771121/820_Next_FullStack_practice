"use client";

import { useEffect, useState } from "react";

export default function CityPage({ params }: { params: { cityname: string } }) {
  const [data, setData] = useState<{ message: string } | undefined>();
  useEffect(() => {
    const getCityName = async () => {
      const res = await fetch(
        `http://localhost:3000/api/city/${params.cityname}`
      );
      const city = await res.json();

      setData(city);
    };

    getCityName();
  }, []);

  return <div>{data ? data.message : null}</div>;
}
