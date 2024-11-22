import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import clsx from "clsx"

// Images
import Recommender from '@/images/recommender.jpg';
import MicroLearning from '@/images/microlearning.jpg';
import VR from '@/images/vr.jpg';
import AiTutor from '@/images/ai_tutor.jpg';

interface Product {
  id: number
  name: string
  description: string
  image: string
  url?: string
}

const products: Product[] = [
  {id: 1, 
  name: 'ALSADA', 
  description: 'Adaptive Learning System with Advanced Data Analytics',
  image: Recommender.src},
  {id: 2, 
  name: 'Micro Learning App', 
  description: 'Bite-sized lessons to keep users engaged',
  image: MicroLearning.src},
  {id: 3, 
  name: 'AR/VR Learning', 
  description: 'Immersive learning experiences',
  image: VR.src},
  {id: 4, 
  name: 'AI Tutor', 
  description: 'Personalized learning experiences',
  image: AiTutor.src},
]

interface ProductMatrixProps {
  className?: string | undefined
}

export default function ProductMatrix({className}: ProductMatrixProps) {
  return (
    <div className={clsx("container mx-auto px-4 py-8", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="aspect-square relative mb-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
