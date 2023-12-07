import { Link, useNavigation } from "react-router-dom";

export default function BackButton() {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div
        to={"/"}
        className="rounded-md bg-[#b5bab5] px-2 py-1 font-semibold text-[#14213d] hover:bg-[#a37c29] hover:font-bold  hover:text-[#14213d]"
      >
        {" "}
        Back{" "}
      </div>
    );
  }
  return (
    <Link
      to={"/"}
      className="rounded-md bg-[#b5bab5] px-2 py-1 font-semibold text-[#14213d] hover:bg-[#a37c29] hover:font-bold  hover:text-[#14213d]"
    >
      {" "}
      Back{" "}
    </Link>
  );
}
