import immg from "./imgs/hhh.JPG";
import Small from "./small";
export default function SideMenu() {
  const categories = [
    { id: 0, n: "hassan", child: <img width={80} src={immg}></img> },
    { id: 1, n: "hassan" },
  ];
  const cat = categories.map((item) => (
    <Small key={item.id} name={item.n}>
      {item.child}
    </Small>
  ));

  return (
    <div
      style={{
        border: "4px solid rgb(14, 181, 148)",
        marginLeft: "10px",
        marginTop: "20px",
      }}
    >
      <Small name="hassan" />
      {cat}
    </div>
  );
}
