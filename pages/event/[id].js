import { useRouter } from 'next/router';
import Image from 'next/image';

const events = [
  { id: 1, date: '15 June 2024 | 6:00 PM', title: 'Lorem Ipsum Event', description: 'Full details for event 1 ...' },
  { id: 2, date: '25 June 2024 | 5:00 PM', title: 'Lorem Ipsum Event', description: 'Full details for event 2 ...' },
  { id: 3, date: '05 July 2024 | 10:00 AM', title: 'Lorem Ipsum Event', description: 'Full details for event 3 ...' },
  { id: 4, date: '12 July 2024 | 6:30 PM', title: 'Lorem Ipsum Event', description: 'Full details for event 4 ...' },
];

export default function EventDetail() {
  const router = useRouter();
  const { id } = router.query;
  const event = events.find(event => event.id === parseInt(id));

  if (!event) return <div>Event not found</div>;

  return (
    <div className="container mx-auto px-4">
      <Image src={`/images/event-${event.id}.jpg`} alt={event.title} className="w-full h-80 object-cover mb-4" width={800} height={600} />
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <p className="text-gray-600 mb-4">{event.date}</p>
      <p className="text-gray-800 mb-4">{event.description}</p>
      {/* Add more event details as needed */}
    </div>
  );
}
