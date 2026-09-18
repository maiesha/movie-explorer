
import Hero from '../components/Hero';
export default function Home({ setPage }) {
  return (
    <div>
      <Hero setPage={setPage} />
      {/* এখানে চাইলে ট্রেন্ডিং কোনো সেকশন দিতে পারেন */}
    </div>
  );
}