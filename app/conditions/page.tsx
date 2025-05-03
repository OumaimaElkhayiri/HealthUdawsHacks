import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, TreesIcon as Lungs, Brain, Bone, Droplet, Pill } from "lucide-react"

export default function ConditionsPage() {
  return (
    <div className="container py-10">
      <div className="mb-10 space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Health Conditions</h1>
        <p className="text-gray-500 max-w-3xl">
          Learn about common health conditions, symptoms, treatments, and preventive measures.
        </p>
      </div>

      <Tabs defaultValue="cardiovascular" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-6">
          <TabsTrigger value="cardiovascular" className="flex flex-col items-center gap-1 py-2">
            <Heart className="h-5 w-5" />
            <span>Cardiovascular</span>
          </TabsTrigger>
          <TabsTrigger value="respiratory" className="flex flex-col items-center gap-1 py-2">
            <Lungs className="h-5 w-5" />
            <span>Respiratory</span>
          </TabsTrigger>
          <TabsTrigger value="neurological" className="flex flex-col items-center gap-1 py-2">
            <Brain className="h-5 w-5" />
            <span>Neurological</span>
          </TabsTrigger>
          <TabsTrigger value="musculoskeletal" className="flex flex-col items-center gap-1 py-2">
            <Bone className="h-5 w-5" />
            <span>Musculoskeletal</span>
          </TabsTrigger>
          <TabsTrigger value="diabetes" className="flex flex-col items-center gap-1 py-2">
            <Droplet className="h-5 w-5" />
            <span>Diabetes</span>
          </TabsTrigger>
          <TabsTrigger value="mental" className="flex flex-col items-center gap-1 py-2">
            <Pill className="h-5 w-5" />
            <span>Mental Health</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="cardiovascular" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Hypertension (High Blood Pressure)</CardTitle>
                <CardDescription>A common condition that affects the arteries</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Hypertension, or high blood pressure, is a condition where the force of blood against your artery
                  walls is consistently too high. If left untreated, it can lead to serious health problems such as
                  heart disease and stroke.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Often no symptoms (silent disease)</li>
                    <li>Headaches (in severe cases)</li>
                    <li>Shortness of breath</li>
                    <li>Nosebleeds</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Coronary Artery Disease</CardTitle>
                <CardDescription>The most common type of heart disease</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Coronary artery disease develops when the major blood vessels that supply your heart become damaged or
                  diseased. Cholesterol-containing deposits (plaque) and inflammation are usually the cause of coronary
                  artery disease.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Chest pain (angina)</li>
                    <li>Shortness of breath</li>
                    <li>Pain in the neck, jaw, throat, upper abdomen, or back</li>
                    <li>Fatigue</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Heart Failure</CardTitle>
                <CardDescription>When the heart can't pump blood effectively</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Heart failure occurs when the heart muscle doesn't pump blood as well as it should. When this happens,
                  blood often backs up and fluid can build up in the lungs, causing shortness of breath.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Shortness of breath</li>
                    <li>Fatigue and weakness</li>
                    <li>Swelling in legs, ankles, and feet</li>
                    <li>Rapid or irregular heartbeat</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="respiratory" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Asthma</CardTitle>
                <CardDescription>A condition affecting the airways in the lungs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Asthma is a condition in which your airways narrow and swell and may produce extra mucus. This can
                  make breathing difficult and trigger coughing, a whistling sound (wheezing) when you breathe out and
                  shortness of breath.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Shortness of breath</li>
                    <li>Chest tightness or pain</li>
                    <li>Wheezing when exhaling</li>
                    <li>Trouble sleeping due to breathing difficulties</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Chronic Obstructive Pulmonary Disease (COPD)</CardTitle>
                <CardDescription>A group of lung diseases that block airflow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  COPD is a chronic inflammatory lung disease that causes obstructed airflow from the lungs. It's
                  typically caused by long-term exposure to irritating gases or particulate matter, most often from
                  cigarette smoke.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Shortness of breath, especially during physical activities</li>
                    <li>Chronic cough</li>
                    <li>Wheezing</li>
                    <li>Chest tightness</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pneumonia</CardTitle>
                <CardDescription>An infection that inflames air sacs in the lungs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Pneumonia is an infection that inflames the air sacs in one or both lungs. The air sacs may fill with
                  fluid or pus, causing cough with phlegm or pus, fever, chills, and difficulty breathing.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Chest pain when breathing or coughing</li>
                    <li>Confusion or changes in mental awareness (in adults age 65 and older)</li>
                    <li>Cough, which may produce phlegm</li>
                    <li>Fatigue and fever</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="neurological" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Alzheimer's Disease</CardTitle>
                <CardDescription>A progressive disorder that causes brain cells to degenerate</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Alzheimer's disease is a progressive neurologic disorder that causes the brain to shrink (atrophy) and
                  brain cells to die. It is the most common cause of dementia — a continuous decline in thinking,
                  behavioral and social skills.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Memory loss</li>
                    <li>Difficulty with problem-solving</li>
                    <li>Confusion with time or place</li>
                    <li>Changes in mood and personality</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Parkinson's Disease</CardTitle>
                <CardDescription>A disorder of the central nervous system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Parkinson's disease is a progressive nervous system disorder that affects movement. Symptoms start
                  gradually, sometimes with a barely noticeable tremor in just one hand. Tremors are common, but the
                  disorder also commonly causes stiffness or slowing of movement.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Tremor</li>
                    <li>Slowed movement (bradykinesia)</li>
                    <li>Rigid muscles</li>
                    <li>Impaired posture and balance</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Multiple Sclerosis (MS)</CardTitle>
                <CardDescription>A disease that affects the central nervous system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Multiple sclerosis is a potentially disabling disease of the brain and spinal cord. In MS, the immune
                  system attacks the protective sheath (myelin) that covers nerve fibers and causes communication
                  problems between your brain and the rest of your body.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Numbness or weakness in limbs</li>
                    <li>Electric-shock sensations with certain neck movements</li>
                    <li>Tremor, lack of coordination or unsteady gait</li>
                    <li>Vision problems</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="musculoskeletal" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Osteoarthritis</CardTitle>
                <CardDescription>The most common form of arthritis</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Osteoarthritis is the most common form of arthritis, affecting millions of people worldwide. It occurs
                  when the protective cartilage that cushions the ends of your bones wears down over time.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Pain during or after movement</li>
                    <li>Joint stiffness upon awakening or after inactivity</li>
                    <li>Joint tenderness</li>
                    <li>Loss of flexibility</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Rheumatoid Arthritis</CardTitle>
                <CardDescription>An inflammatory disorder affecting joints</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Rheumatoid arthritis is a chronic inflammatory disorder that can affect more than just your joints. In
                  some people, the condition can damage a wide variety of body systems, including the skin, eyes, lungs,
                  heart and blood vessels.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Tender, warm, swollen joints</li>
                    <li>Joint stiffness that is usually worse in the mornings</li>
                    <li>Fatigue, fever and loss of appetite</li>
                    <li>Early stages may affect smaller joints first</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Osteoporosis</CardTitle>
                <CardDescription>A condition that weakens bones</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Osteoporosis causes bones to become weak and brittle — so brittle that a fall or even mild stresses
                  such as bending over or coughing can cause a fracture. Osteoporosis-related fractures most commonly
                  occur in the hip, wrist or spine.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Back pain, caused by a fractured vertebra</li>
                    <li>Loss of height over time</li>
                    <li>A stooped posture</li>
                    <li>Bone fractures that occur much more easily than expected</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="diabetes" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Type 1 Diabetes</CardTitle>
                <CardDescription>An autoimmune condition</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Type 1 diabetes is a chronic condition in which the pancreas produces little or no insulin. Insulin is
                  a hormone needed to allow sugar (glucose) to enter cells to produce energy.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Increased thirst</li>
                    <li>Frequent urination</li>
                    <li>Extreme hunger</li>
                    <li>Unintended weight loss</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Type 2 Diabetes</CardTitle>
                <CardDescription>A chronic condition affecting how the body processes blood sugar</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Type 2 diabetes is a chronic condition that affects the way your body metabolizes sugar (glucose) — an
                  important source of fuel for your body. With type 2 diabetes, your body either resists the effects of
                  insulin or doesn't produce enough insulin to maintain normal glucose levels.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Increased thirst and frequent urination</li>
                    <li>Increased hunger</li>
                    <li>Fatigue</li>
                    <li>Blurred vision</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gestational Diabetes</CardTitle>
                <CardDescription>Diabetes that develops during pregnancy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Gestational diabetes is a type of diabetes that develops during pregnancy. Like other types of
                  diabetes, gestational diabetes affects how your cells use sugar (glucose). Gestational diabetes causes
                  high blood sugar that can affect your pregnancy and your baby's health.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Usually no symptoms</li>
                    <li>May include increased thirst</li>
                    <li>Frequent urination</li>
                    <li>Fatigue</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mental" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Depression</CardTitle>
                <CardDescription>A mood disorder causing persistent feelings of sadness</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest. It
                  affects how you feel, think and behave and can lead to a variety of emotional and physical problems.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Feelings of sadness, tearfulness, emptiness or hopelessness</li>
                    <li>Loss of interest in most or all normal activities</li>
                    <li>Sleep disturbances</li>
                    <li>Tiredness and lack of energy</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Anxiety Disorders</CardTitle>
                <CardDescription>Conditions characterized by feelings of worry or fear</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Anxiety disorders are a group of mental health disorders characterized by significant feelings of
                  anxiety and fear. These feelings may cause physical symptoms, such as a racing heart and shakiness.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Feeling nervous, restless or tense</li>
                    <li>Having a sense of impending danger, panic or doom</li>
                    <li>Increased heart rate</li>
                    <li>Breathing rapidly (hyperventilation)</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bipolar Disorder</CardTitle>
                <CardDescription>A mental health condition causing extreme mood swings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Bipolar disorder, formerly called manic depression, is a mental health condition that causes extreme
                  mood swings that include emotional highs (mania or hypomania) and lows (depression).
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Common Symptoms:</h4>
                  <ul className="list-disc pl-5 text-gray-500">
                    <li>Mania or hypomania: Abnormally upbeat, increased activity</li>
                    <li>Depression: Feeling sad, empty, hopeless</li>
                    <li>Sleep disturbances</li>
                    <li>Unusual talkativeness or racing thoughts during manic episodes</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-6">
          Our healthcare professionals are available to answer your questions and provide personalized advice about
          these and other health conditions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700">Schedule a Consultation</Button>
          <Button variant="outline">Browse Health Resources</Button>
        </div>
      </div>
    </div>
  )
}
