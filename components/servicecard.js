export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2 text-red-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
